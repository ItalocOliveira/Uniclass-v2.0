import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
    constructor(){
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
        });
    }

    async uploadImage(file: Express.Multer.File): Promise<string>{
        return new Promise((resolve, reject) => {
            const upload = cloudinary.uploader.upload_stream(
                {folder: 'uniclass_sugestoes'}, (error, result) => {
                    if (error) return reject(error);
                    if(!result) return reject(new Error('Erro Cloudinary: Upload indefinido'));
                    resolve(result.secure_url);
                });
            const stream = new Readable();
            stream.push(file.buffer);
            stream.push(null);
            stream.pipe(upload)
        });
    }
}
