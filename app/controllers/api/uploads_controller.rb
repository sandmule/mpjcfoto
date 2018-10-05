class Api::UploadsController < ApplicationController
  def create
  end

  def presigned_url
    filename = "#{params['album_name']}/#{params['objectName']}"
    content_type = params['contentType']
    data = call(filename, content_type)
    response = { signedUrl: data }
    render json: response
  end

  def call(filename, content_type)
    signer = Aws::S3::Presigner.new
    signer.presigned_url(:put_object,
                          bucket: ENV['BUCKET_NAME'],
                          key: filename,
                          acl: 'public-read',
                          content_type: content_type)
  end
end
