// Iinzio sintassi vue

var app = new Vue (
    {
        el: '#root',
        data:{
            indexImg: 0,
            obj: [
                {
                    img:'https://i.picsum.photos/id/456/200/200.jpg?hmac=Nu8ETZuaEwOyl13MjrpOo92an166yAu4I2emrU09uxg'
                },
                {
                    img:'https://i.picsum.photos/id/981/200/200.jpg?hmac=LRIdIKhx3zHhDGgKVGHBdRjNRrgVbpWUw02O7Uuy2C4'
                },
                {
                    img:'https://i.picsum.photos/id/1072/200/200.jpg?hmac=jar1_w-0fdzV_d70mmk9VzkBQA9B_oSZuZs21we31ZE'
                },
                {
                    img:'https://i.picsum.photos/id/679/200/200.jpg?hmac=sPsw4YJPQkWFqo2k5UycejGhY4UXvaDXStGmvJEhFBA'
                },
                {
                    img:'https://i.picsum.photos/id/361/200/200.jpg?hmac=8pPTUqe61Cxj4FYarGS9vZKtqUSjAzxOQJ0zBIHq28o'
                }
                       ] 
             },
             methods: {
                nextImg: function(){

                    if (this.indexImg < this.obj.length-1) {
                        this.indexImg++;  
                    } else {
                        this.indexImg=0;
                    }
                },

                beforeImg: function (){
                    if (this.indexImg <= this.obj.length) {
                        this.indexImg--;
                    } else {

                    }
                }

             }

    })
