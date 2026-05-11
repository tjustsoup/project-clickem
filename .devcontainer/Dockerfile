FROM registry.fedoraproject.org/fedora:43

# Basic tooling + Tauri Linux deps (Fedora)
# Tauri prereqs list webkit2gtk4.1-devel, openssl-devel, libappindicator-gtk3-devel, librsvg2-devel, libxdo-devel, and C toolchain. :contentReference[oaicite:3]{index=3}
RUN dnf -y update && \
    dnf -y install \
      git \
      curl \
      wget \
      file \
      sudo \
      which \
      procps-ng \
      pkgconf-pkg-config \
      nodejs \
      openssl-devel \
      webkit2gtk4.1-devel \
      libappindicator-gtk3-devel \
      librsvg2-devel \
      libxdo-devel \
      gcc \
      gcc-c++ \
      make \
    && dnf -y clean all

# Create a non-root user for VS Code
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid ${USER_GID} ${USERNAME} && \
    useradd --uid ${USER_UID} --gid ${USER_GID} -m ${USERNAME} && \
    echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} && \
    chmod 0440 /etc/sudoers.d/${USERNAME}

USER ${USERNAME}
WORKDIR /workspaces

# Rust via rustup (most predictable)
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/home/${USERNAME}/.cargo/bin:${PATH}"

# Enable pnpm via corepack (ships with node)
RUN corepack enable
