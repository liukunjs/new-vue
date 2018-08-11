<template>
  <div class="diction">
    <h2>下一次你想去哪？</h2>
    <div class="search">
    <input type="text" placeholder="请输入你的目的地">
    </div>
    <div class="line"></div>
    <div class="list">
        <ul class="area">
             <li v-for="(a,k) in area" :key="k" v-on:click="chooseArea(k)" 
            :style="'background-color:'+ (k==witch?'#fff':'')+';'"
            :data-index="k">{{a}}</li>
        </ul>
        <div class="place">
        <ul >
          <li class="hot">热门</li>
          <router-link v-for="(v,k) in placeImg" class="pic" tag="li" to="/cityinfo/a">
            <img :src="v.src" alt="">
            <div class="mask"></div>
            <div class="info">
              <p class="ct">{{v.title}}</p>
              <p class="big">{{v.en}}</p>
            </div>
          </router-link>
        </ul>
        <ul class="city">
           <li v-for="(v,j) in city" :key="j" class="cT"><p>{{v.title}}</p>
             <router-link v-for="(v1,j1) in v.lists" :key="j1" tag="span" to="/cityinfo/a">{{v1}}</router-link>
           </li>
        </ul>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
}
    h2{
      padding:20px;
     font-weight:normal;
     margin-bottom:10px;
    }
    .search{
      display:flex;
      padding:0 20px;
          input{
            flex:1;
            background-color:#eee;
            padding:10px 20px;
            margin-bottom:20px;
            outline:none;
            border:none;
              }
    }
    .line {
      border: 0.5px solid #999;
    }
    .list {
      display:flex;
       .area{
        flex:0.9;
        background-color: #eee;
        padding-bottom:224px;
            li{
              padding:15px 0;
              padding-left:20px;
              list-style:none;
         }
    }
    }
    .place{
       height:530px;
        flex:1.6;
        overflow:auto;
       .hot{
          padding:20px;
       }
       ul{
        overflow:hidden;
        border-bottom: 1px solid #999;
       }
       .city{
        padding-left:10px;
        color:#000;
            p{
              padding: 10px 0;
              color:#000;
            }
            span{
                padding: 10px 13px 10px 0;
                color:#777;
                float:left;
            }
            .cT{
              overflow:hidden;
            }
       }
    }
    .pic{
      border-raduis:5%;
      position:relative;
      float:left;
      width: 100px;
      height:60px;
      margin:7px;
      .mask{
        position:absolute;
        background-color: rgba(7,7,7,.2);
        height:60px;
        z-index:2;
        width:100px;
        top:0px;
      }
     img{
      width: 100%;
      height:100%;
    }
    .info {
      text-align:center;
      width:100%;
      color:#fff;
      position:absolute;
      z-index:3;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }
</style>
<script>
  export default{
    data(){
      return {
        area:["境内","东南亚","日韩港台","美洲","欧洲","澳新 中东 非"],
        witch:0,
        placeImg:[],
        city:[],
        data:[]
      }
    },
    methods:{
      chooseArea(k){
        this.witch = k
        let part = "part"+k
        //通过传递进来的index，点击的判断是哪一个，切换数据更换视图
       this.placeImg = this.data[part].img
       this.city = this.data[part].city
     }
    },
    //当组件建立完成后请求数据
    created(){
      this.$http.get("/data/product.json")
      .then(data =>{
        //第一次设置默认的数据
       this.placeImg = data.data.part0.img
       this.city = data.data.part0.city
       //保存所以数据防止再次请求
       this.data = data.data
      })
    }
  }
</script>
