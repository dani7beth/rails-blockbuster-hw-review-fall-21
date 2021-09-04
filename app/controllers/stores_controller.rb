class StoresController < ApplicationController
  def index
    @stores = Store.all
    render component: 'Stores', props:{stores: @stores}
  end

  def show
    # 'Store'
  end

  def new
    # 'StoreNew'
  end

  def create
  end

  def edit
    # 'StoreEdit'
  end

  def update
  end

end
