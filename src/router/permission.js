import router from "@/router/index.js";

router.beforeEach((to, from, next)=>{
    let token = window.sessionStorage.getItem("token");
    // console.log("token="+token);
    // console.log("to.path="+to.path);
    const whiteList=["/login"];
    if(token=="登录成功"){
        if(to.path=="/login"){
            next("/home");
        }else{
            next();
        }
    }else{
        if(whiteList.includes(to.path)){
            next();
        }else{
            next("/login");
        }
    }
})