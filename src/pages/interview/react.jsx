const ReactInterview =()=>{
    return (<div>
        <h5>
        react必问面试题
        </h5>
        <p>生命周期(参考链接：<a target="_blank" href="https://zh-hans.reactjs.org/docs/react-component.html#mounting">React.Component</a>)</p>
        <ul>
            <li>constructor初始化数据,接收props</li>
            <li>componentDidMount,挂载阶段，可以发请求.组件已经被渲染到 DOM 中</li>
            <li>render()更新阶段</li>
            <li>shouldComponentUpdate,该方法会在重新渲染前被触发，你可以在 shouldComponentUpdate 中返回 false 避免不必要渲染。</li>
            <li>componentWillUnmount(),卸载阶段，清除计时器等</li>
        </ul>
    </div>)
}

export default ReactInterview