class TestController < ApplicationController
  def index
    render json: ('{ "test": "Hello World" }')
  end
end
