import shubhlipi as sh
import os, yaml, json

for x in sh.argv:
    if x == "build":
        # take the files from the /src/langs/data and save it as json in /src/langs/data_json
        sh.makedir("src/langs/data_json")
        for file in os.listdir("src/langs/data"):
            if file.endswith(".yaml"):
                with open("src/langs/data/" + file, "r") as f:
                    data = yaml.safe_load(f)
                    with open("src/langs/data_json/" + file[:-5] + ".json", "w") as fl_json:
                        json.dump(data, fl_json, indent=4, ensure_ascii=False, sort_keys=False)
        sh.cmd("npm run build", False)
