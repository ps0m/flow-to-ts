import fs from 'fs';
import path from 'path';

export const recursiveTraversal =  (root:string, files:Set<string>) => {
        try {
            const initialFolder = fs.readdirSync(root);

            for (let item of initialFolder) {
                const stat = fs.statSync(`${root}/${item}`);
                const newPath = `${root}/${item}`
                if (stat.isFile()) {
                    const extension = path.extname(newPath);
                    if (['.js', '.flow'].includes(extension)) {
                        files.add(newPath);
                    }
                } else {
                    recursiveTraversal(newPath,files);
                }
            }
        } catch (error) {
            console.log(`recursiveTraversal with error: ${error.message}`)
        }
    }