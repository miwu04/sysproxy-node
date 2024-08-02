#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use napi::Error;
use sysproxy::{Autoproxy, Sysproxy};

#[napi]
pub fn trigger_manual_proxy(
  enable: bool,
  host: String,
  port: u16,
  bypass: String,
) -> Result<(), Error> {
  let sys = Sysproxy {
    enable,
    host,
    port,
    bypass,
  };
  match sys.set_system_proxy() {
    Ok(_) => Ok(()),
    Err(e) => Err(Error::new(napi::Status::GenericFailure, e.to_string())),
  }
}

#[napi]
pub fn trigger_auto_proxy(enable: bool, url: String) -> Result<(), Error> {
  let auto = Autoproxy { enable, url };
  match auto.set_auto_proxy() {
    Ok(_) => Ok(()),
    Err(e) => Err(Error::new(napi::Status::GenericFailure, e.to_string())),
  }
}
