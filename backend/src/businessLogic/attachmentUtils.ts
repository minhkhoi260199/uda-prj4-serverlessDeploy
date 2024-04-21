export class AttachmentUtils {
  constructor(
    private readonly bucket_name = process.env.ATTACHMENT_S3_BUCKET
  ) {}

  getAttachmentUrl(userId: string): string {
    return "https://" + this.bucket_name + ".s3.amazoneaws.com/" + userId;
  }

}
