import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { cloudName, apiKey, apiSecret } from "../Config/config";


if (!cloudName || !apiKey || !apiSecret) {
  throw new Error("Cloudinary configuration missing");
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export const uploadFile = async (
  fileUrl: string,
  publicId: string,
  fileType: string
): Promise<UploadApiResponse> => {
  try {
    let uploadOptions: any = { public_id: publicId };

    if (fileType === "image") {
      uploadOptions = { ...uploadOptions, resource_type: "image" };
    } else if (fileType === "file") {
      uploadOptions = { ...uploadOptions, resource_type: "raw" };
    }

    const result = await cloudinary.uploader.upload(fileUrl, uploadOptions);
    return result;
  } catch (err) {
    throw err;
  }
};
