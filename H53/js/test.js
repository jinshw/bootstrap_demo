/**
 * Created by JINSHW on 2015-08-25.
 */
require.config({
    paths: {
        echarts:'../../lib/echarts-2.2.7/build/dist/echarts-all'
    }
});

require(["echarts"],function(){
    console.log(echarts);
});