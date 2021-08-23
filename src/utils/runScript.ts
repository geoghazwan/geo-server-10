import { pythonScripts } from "../scripts";
import { promisify } from "util";
const exec = promisify(require("child_process").exec);
import { PythonShell } from "python-shell";

export const runScript = async (script: string): Promise<void> => {
  const output = await exec(script);
  console.log({ ooooooooo: output });
  return output;
};

const script = `E=quit
D=print
import gps as A,time
B=A.gps('127.0.0.1','2947')
B.stream(A.WATCH_ENABLE|A.WATCH_NEWSTYLE)
while True:
	try:
		time.sleep(0.5);C=B.next()
		if C['class']=='TPV':
			if hasattr(C,'lat'):D(str(C.lat));E()
	except KeyError:pass
	except KeyboardInterrupt:E()
	except StopIteration:B=None;D('No incoming data from the GPS module')`;

export const runPy = () => {
  PythonShell.run(
    "./py.py",
    {
      pythonOptions: ["-u"], // get print results in real-time
    },
    (error: any, output: any) => {
      console.log({ fuuu: error, output });
    }
  );
};
