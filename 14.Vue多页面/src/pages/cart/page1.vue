<template>
    <div>
        <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">hover 激活</el-button>
        </el-popover>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value5: 3.7
            }
        }
    };
</script>

<style lang="css" rel="stylesheet/css">

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
