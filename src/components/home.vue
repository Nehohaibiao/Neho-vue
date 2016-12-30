<template>
  <div id="home">
    <div class="neho-header">
      <mt-header fixed title="首页">
      </mt-header>
    </div>
    <div class="neho-container">
      <div class="neho-row neho-none">
        <div class="neho-col-10 neho-none">
          <div class="swipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item>
                <img src="../assets/images/photo/logo1.jpg"/>
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="../assets/images/photo/logo2.jpg"/>
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="../assets/images/photo/logo3.jpg"/>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <style>
  .neho-none{
    padding:0px;
    border:none!important
  }
  .swipe{
    height:200px
  }
  .swipe img{
    width:100%;
    height:200px
  }
  </style>
