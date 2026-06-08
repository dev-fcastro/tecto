FROM python:3.12-slim

# Install Tectonic runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates \
    libssl3 libfontconfig1 libharfbuzz0b libgraphite2-3 \
    && rm -rf /var/lib/apt/lists/*

# Install Tectonic binary
RUN curl -Lo /tmp/tectonic.tar.gz \
    "https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%400.15.0/tectonic-0.15.0-x86_64-unknown-linux-gnu.tar.gz" \
    && tar -xz -C /usr/local/bin/ -f /tmp/tectonic.tar.gz \
    && rm /tmp/tectonic.tar.gz \
    && chmod +x /usr/local/bin/tectonic \
    && tectonic --version

# Install Python deps
COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt

# Copy app
COPY . /app
WORKDIR /app

# PDF output dir
RUN mkdir -p /tmp/tecto_pdfs

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s \
  CMD curl -f http://localhost:8080/health || exit 1

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
