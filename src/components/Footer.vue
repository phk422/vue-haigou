<template>
  <div id="footer">
    <div class="service wrap clearfix">
      <div class="item clearfix">
        <div class="icon">正</div>
        <h3 class="title">正品保证</h3>
        <p class="desc">正品保障 假一赔十</p>
      </div>
      <div class="item">
        <div class="icon">低</div>
        <h3 class="title">低价保障</h3>
        <p class="desc">缩减中间环节 确保低价</p>
      </div>
      <div class="item">
        <div class="icon">退</div>
        <h3 class="title">30天无忧退货</h3>
        <p class="desc">国内退货 售后无忧</p>
      </div>
      <div class="item">
        <div class="icon">邮</div>
        <h3 class="title">满88包邮</h3>
        <p class="desc">部分特殊商品除外</p>
      </div>
    </div>
    <div class="guide wrap clearfix">
      <div class="follow">
        <a href="#">
          <img src="../assets/img/logo_footer.png" alt="" />
        </a>
        <div class="follow-us">
          <span>关注我们</span>
          <i class="icon icon-weibo"></i>
          <i class="icon icon-wechat"></i>
        </div>
      </div>

      <ul class="guide-list clearfix">
        <li class="item">
          <dl>
            <dt>考拉保障</dt>
            <dd><a href="#">假一赔十</a></dd>
            <dd><a href="#">廉正举报</a></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>新手指南</dt>
            <dd><a href="#">购物流程</a></dd>
            <dd><a href="#">支付方式</a></dd>
            <dd><a href="#">通关税费</a></dd>
            <dd><a href="#">常见问题</a></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>售后服务</dt>
            <dd><a href="#">售后政策</a></dd>
            <dd><a href="#">退货流程</a></dd>
            <dd><a href="#">特色服务</a></dd>
            <dd><a href="#">联系客服</a></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>物流配送</dt>
            <dd><a href="#">配送方式</a></dd>
            <dd><a href="#">配送服务</a></dd>
            <dd><a href="#">运费标准</a></dd>
            <dd><a href="#">物流跟踪</a></dd>
          </dl>
        </li>
        <li class="item">
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">联系我们</a></dd>
            <dd><a href="#">招商合作</a></dd>
            <dd><a href="#">销售联盟</a></dd>
            <dd><a href="#">CEO邮箱</a></dd>
          </dl>
        </li>
      </ul>

      <div class="download">
        <img src="../assets/img/qrcode-app.png" alt="" />
        <p>扫描下载手机版</p>
      </div>
    </div>
    <div class="about">
      <p class="line1">
        <a href="#">隐私策略</a>
        <span> - </span>
        <a href="#">考拉海购</a>
      </p>
      <p class="line2">
        <span>增值电信业务经营许可证：浙B2-20160288</span>
        <a href="#">自营经营者信息</a>
        <span>（浙）网械平台备字[2018]第00007号</span>
      </p>
      <p class="line3">
        <a class="police" href="#">浙公网安备 33010802002216号</a>
        <span>阿里巴巴版权所有©2003-2019</span>
        <a href="#">互联网药品信息服务资格证书编号（浙）-2017-0027</a>
        <span>浙ICP备16011229号-6</span>
      </p>
      <div class="honest">
        <img class="icon1" src="../assets/img/icon-honest-01.png" alt="" />
        <img class="icon2" src="../assets/img/icon-honest-02.png" alt="" />
        <img class="icon3" src="../assets/img/icon-honest-03.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  /* 顶部整体样式 */
#footer {
    border-top: 1px solid #eaeaea;
    margin-top: 80px;
    background-color: #fff;
}

.service {
    padding: 49px 15px;
    border-bottom: 1px solid #eaeaea;
}

.service .item {
    float: left;
    width: 233px;
    margin: 0 23px;
}

.service .item:last-child {
    margin-right: 0;
}

.service .item .icon {
    width: 48px;
    height: 48px;
    margin-right: 18px;
    line-height: 48px;
    border: 2px solid #d6d6d6;
    border-radius: 50%;
    text-align: center;

    font-size: 20px;
    font-weight: 700;

    float: left;
}

.service .item .title {
    font-size: 18px;
}

.service .item .desc {
    font-size: 14px;
}

/* 指南相关样式 */
.guide {
    padding: 45px 0 90px;
}

.follow {
    float: left;
    padding-right: 40px;
}

.follow-us {
    margin-top: 16px;
}

.follow-us .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    vertical-align: middle;
}

.follow-us .icon-weibo {
    background: url('../assets/img/icon-weibo.png');
}

.follow-us .icon-wechat {
    background: url('../assets/img/icon-weixin.png');
}


.guide-list {
    float: left;
}

.guide-list .item {
    float: left;
    width: 110px;
    padding-left: 21px;
}

.guide-list .item dt {
    font-size: 18px;
    margin-bottom: 10px;
}

.guide-list .item dd {
    margin-bottom: 8px;
}

.guide-list .item dd a:hover {
    text-decoration: underline;
}

.download {
    text-align: center;
}

.download p {
    margin-top: 8px;
}

/* 关于我们样式 */
.about {
    padding: 20px 0;
    background: #333;
    color: #c2c2c2;
    text-align: center;
}

.about p {
    margin-top: 8px;
}

.about a {
    color: #c2c2c2;
}

.about a:hover {
    text-decoration: underline;
}

.about .line2 a, .about .line3 a {
    margin: 0 24px;
}

.about .police {
    position: relative;
}

.about .police::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background: url("../assets/img/icon-police.png");
    left: -25px;
    top: -3px;
}

.honest {
    margin-top: 8px;
}

.honest .icon1 {
    width: 84px;
    height: 30px;
}

.honest .icon2 {
    width: 80px;
    height: 30px;
    margin: 0 12px;
}

.honest .icon3 {
    width: 30px;
    height: 30px;
}


</style>