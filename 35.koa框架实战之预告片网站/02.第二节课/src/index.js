/**
 * Created by yangli on 2020/2/17.
 */
import {readFile as rf} from 'fs'

rf('./package.json',(err, data)=>{
    console.log(123)
    console.log(data)
})