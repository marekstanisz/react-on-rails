class CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: Comment.all
    else
      render json: { success: false }
    end
  end

  private

  def comment_params
    params.permit(:author, :text)
  end
end
