const fs = require("fs");
const path = require("path");

const current_Dir = __dirname;
// console.log(`Current Directory = ${current_Dir}`)

const files = fs.readdirSync(current_Dir);
// console.log(`Files in Current Directory = ${files}`)
// console.log(files)
files.forEach((file) => {
    const full_path=path.join(current_Dir,file)
    // console.log(`Full path = ${full_path}`)
    const ext=path.extname(file).slice(1)
    // console.log(`ext = ${ext}`)
    if(!ext || ext=="js"){
        return
    }
    else{
        const folder_path=path.join(current_Dir,ext)
        // console.log(`folder path = ${folder_path}`)
        try {
            fs.mkdirSync(folder_path)
            console.log(` ${ext} folder created`)

        } catch (error) {
            // console.log(error)
        }
        console.log(ext)
        const dest_path=path.join(folder_path,file)
        // console.log(`Dest path = ${dest_path}`)
       // Move file into the folder
    fs.renameSync(full_path, dest_path);
    console.log(`${file} moved to ${ext}`);

        console.log(`The ${ext} file moved to ${ext} folder`)
    }

    
})
