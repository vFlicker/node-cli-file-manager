# CLI application

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm run start -- --username=your_username
```

## Examples of using commands

### Navigation & working directory

Go upper from current directory

```
up
```

Go to dedicated folder from current directory

```
cd path_to_directory
```

List all files and folder in current directory

```
ls
```

### Operations with files

Read file

```
cat path_to_file
```

Create empty file in current working directory

```
add new_file_name
```

Rename file

```
rn path_to_file new_filename
```

Copy file

```
cp path_to_file path_to_new_directory
```

Move file

```
mv path_to_file path_to_new_directory
```

Delete file

```
rm path_to_file
```

### Operating system

Get EOL

```
os --EOL
```

Get host machine CPUs info

```
os --cpus
```

Get home directory

```
os --homedir
```

Get current system user name

```
os --username
```

Get CPU architecture

```
os --architecture
```

### Hash

Calculate hash for file

```
hash path_to_file
```

### Zip

Compress file

```
compress path_to_file path_to_destination
```

Decompress file

```
decompress path_to_file path_to_destination
```
