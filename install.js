if(process.platform == "linux"){

    const { execSync } = require('child_process')

    execSync("chmod 0755 cli.js");
    execSync("ln -s $(pwd)/cli.js /usr/local/bin/test-app");
    execSync("chmod 0755 /usr/local/bin/test-app");

}
else if(process.platform == "win32"){



}
