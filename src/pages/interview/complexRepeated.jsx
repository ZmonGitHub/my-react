import { useEffect,useState } from "react"
import { Input } from 'antd';
import { message } from 'antd';
const { TextArea } = Input;
const ComplexRepeated = () => {
    const [getArr,setArr] = useState()
    const [oneReturn,setOne] = useState()
    const arr = [
        {name:1,age:18,id:1},
        {name:2,age:18,id:2},
        {name:3,age:18,id:3},
        {name:1,age:18,id:1},
    ]
    // 方法1
    const deleteRepetition = (arr,only="id") => {
        if(!Array.isArray(arr)){
            return  message.info('该方法只接受数组');
        }
        let newArr = []
        for(let i =0;i < arr.length;i++){
            if(newArr.every(item=>item[only] !== arr[i][only])){
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    const oneChange = (e) => {
        console.log(eval(e.target.value)) // 执行表达式
        setOne(JSON.stringify(deleteRepetition(eval(e.target.value),"id")))
    }
    useEffect(()=>{
        // setOne(deleteRepetition(arr,"id"))
        setArr(`
        // only为要对比的键值
        const deleteRepetition = (arr,only) => {
            let newArr = []
            for(let i =0;i < arr.length;i++){
                if(newArr.every(item=>item.name !== arr[i].name)){
                    newArr.push(arr[i])
                }
            }
            return newArr
        }`)
    })
    return (
        <div>
            <header>
            interviewe
            </header>
            <main>
                <h4>我是第一种方式</h4>
                <div>输入需要去重的数组</div>
                <TextArea rows={4} defaultValue={JSON.stringify(arr)} onChange={oneChange} />
                <section>
                    <pre>
                        <code>
                        {getArr}
                        </code>
                        <div>
                        <span>结果</span>
                        <span>{oneReturn}</span>
                        </div>
                    </pre>
                </section>
            </main>
        </div>
    )
}

export default ComplexRepeated