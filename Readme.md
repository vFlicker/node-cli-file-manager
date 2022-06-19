## CLI application

### Examples of using commands

start app and set username:
- `npm run start -- --username=your_username`

navigation:
- `up`
- `cd /users`, `cd ./folder`
- `ls`

files:

- `cat readme.md`, `cat ./folder/readme.md`
- `add new-file.txt`, `add ./folder/new-file.txt`
- `rn readme.md renamed-readme.md`
- `cp readme.md src`, `cp ./folder/readme.md .`
- `mv readme.md src mv`, `mv ./folder/readme.md .`
- `rm readme.md`, `rm ./folder/readme.md`

operating system:

- `os --EOL`
- `os --cpus`
- `os --homedir`
- `os --username`
- `os --architecture`

hash:

- `hash readme.md`, `hash ./folder/readme.md`

zip:

- `compress readme.md src`, `compress ./folder/readme.md .`
- `decompress readme.md.gz src`, `decompress ./folder/readme.md.gz .`
