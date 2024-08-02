# `@mihomo-party/sysproxy`

![https://github.com/pompurin404/sysproxy-rs/actions](https://github.com/pompurin404/sysproxy-rs/workflows/CI/badge.svg)

## Install this test package

```
pnpm add @mihomo-party/sysproxy
```

## Support matrix

### Operating Systems

|                 | node14 | node16 | node18 |
| --------------- | ------ | ------ | ------ |
| Windows x64     | ✓      | ✓      | ✓      |
| Windows x32     | ✓      | ✓      | ✓      |
| Windows arm64   | ✓      | ✓      | ✓      |
| macOS x64       | ✓      | ✓      | ✓      |
| macOS arm64     | ✓      | ✓      | ✓      |
| Linux x64 gnu   | ✓      | ✓      | ✓      |
| Linux arm64 gnu | ✓      | ✓      | ✓      |

## Ability

```TypeScript
function triggerManualProxy(enable: boolean, host: string, port: number, bypass: string): void;
function triggerAutoProxy(enable: boolean, url: string): void;
```
