class Api::UploadsController < ApplicationController
  def create
    Photo.add_files(params['name'], params['url'])
  end

  def presigned_url
    album_name = params['album_name'].empty? ? Time.now.strftime("%Y-%m-%d") : params['album_name']
    filename = "#{album_name}/#{params['objectName']}"
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
