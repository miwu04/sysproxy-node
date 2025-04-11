/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const { existsSync, readFileSync } = require('fs')
const { join } = require('path')

const { platform, arch } = process

let nativeBinding = null
let localFileExisted = false
let loadError = null

function isMusl() {
  // For Node 10
  if (!process.report || typeof process.report.getReport !== 'function') {
    try {
      const lddPath = require('child_process').execSync('which ldd').toString().trim()
      return readFileSync(lddPath, 'utf8').includes('musl')
    } catch (e) {
      return true
    }
  } else {
    const { glibcVersionRuntime } = process.report.getReport().header
    return !glibcVersionRuntime
  }
}

switch (platform) {
  case 'android':
    switch (arch) {
      case 'arm64':
        localFileExisted = existsSync(join(__dirname, 'sysproxy.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.android-arm64.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-android-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm':
        localFileExisted = existsSync(join(__dirname, 'sysproxy.android-arm-eabi.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.android-arm-eabi.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-android-arm-eabi')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Android ${arch}`)
    }
    break
  case 'win32':
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(
          join(__dirname, 'sysproxy.win32-x64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.win32-x64-msvc.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-win32-x64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'ia32':
        localFileExisted = existsSync(
          join(__dirname, 'sysproxy.win32-ia32-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.win32-ia32-msvc.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-win32-ia32-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'sysproxy.win32-arm64-msvc.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.win32-arm64-msvc.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-win32-arm64-msvc')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on Windows: ${arch}`)
    }
    break
  case 'darwin':
    localFileExisted = existsSync(join(__dirname, 'sysproxy.darwin-universal.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./sysproxy.darwin-universal.node')
      } else {
        nativeBinding = require('@mihomo-party/sysproxy-darwin-universal')
      }
      break
    } catch {}
    switch (arch) {
      case 'x64':
        localFileExisted = existsSync(join(__dirname, 'sysproxy.darwin-x64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.darwin-x64.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-darwin-x64')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'arm64':
        localFileExisted = existsSync(
          join(__dirname, 'sysproxy.darwin-arm64.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.darwin-arm64.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-darwin-arm64')
          }
        } catch (e) {
          loadError = e
        }
        break
      default:
        throw new Error(`Unsupported architecture on macOS: ${arch}`)
    }
    break
  case 'freebsd':
    if (arch !== 'x64') {
      throw new Error(`Unsupported architecture on FreeBSD: ${arch}`)
    }
    localFileExisted = existsSync(join(__dirname, 'sysproxy.freebsd-x64.node'))
    try {
      if (localFileExisted) {
        nativeBinding = require('./sysproxy.freebsd-x64.node')
      } else {
        nativeBinding = require('@mihomo-party/sysproxy-freebsd-x64')
      }
    } catch (e) {
      loadError = e
    }
    break
  case 'linux':
    switch (arch) {
      case 'x64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-x64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-x64-musl.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-x64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-x64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-x64-gnu.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-x64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-arm64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-arm64-musl.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-arm64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-arm64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-arm64-gnu.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-arm64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'arm':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-arm-musleabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-arm-musleabihf.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-arm-musleabihf')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-arm-gnueabihf.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-arm-gnueabihf.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-arm-gnueabihf')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 'riscv64':
        if (isMusl()) {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-riscv64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-riscv64-musl.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-riscv64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-riscv64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-riscv64-gnu.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-riscv64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      case 's390x':
        localFileExisted = existsSync(
          join(__dirname, 'sysproxy.linux-s390x-gnu.node')
        )
        try {
          if (localFileExisted) {
            nativeBinding = require('./sysproxy.linux-s390x-gnu.node')
          } else {
            nativeBinding = require('@mihomo-party/sysproxy-linux-s390x-gnu')
          }
        } catch (e) {
          loadError = e
        }
        break
      case 'loong64':
        if (isMusl()) {
          localFileExisted = existsSync(
          join(__dirname, 'sysproxy.linux-loongarch64-musl.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-loongarch64-musl.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-loong64-musl')
            }
          } catch (e) {
            loadError = e
          }
        } else {
          localFileExisted = existsSync(
            join(__dirname, 'sysproxy.linux-loongarch64-gnu.node')
          )
          try {
            if (localFileExisted) {
              nativeBinding = require('./sysproxy.linux-loongarch64-gnu.node')
            } else {
              nativeBinding = require('@mihomo-party/sysproxy-linux-loong64-gnu')
            }
          } catch (e) {
            loadError = e
          }
        }
        break
      default:
        throw new Error(`Unsupported architecture on Linux: ${arch}`)
    }
    break
  default:
    throw new Error(`Unsupported OS: ${platform}, architecture: ${arch}`)
}

if (!nativeBinding) {
  if (loadError) {
    throw loadError
  }
  throw new Error(`Failed to load native binding`)
}

const { triggerManualProxy, triggerAutoProxy } = nativeBinding

module.exports.triggerManualProxy = triggerManualProxy
module.exports.triggerAutoProxy = triggerAutoProxy
