import { Config } from "@remotion/cli/config";
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Use "angle" locally (GPU); switch to "swangle" on a headless server with no GPU.
Config.setChromiumOpenGlRenderer("angle");
