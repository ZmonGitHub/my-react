const ReactInterview = () => {
    return (<div>
        <h1>
            react必问面试题
        </h1>
        <h2>class组件</h2>
        <p>生命周期(参考链接：<a target="_blank" href="https://zh-hans.reactjs.org/docs/react-component.html#mounting">React.Component</a>)</p>
        <p>React.component</p>
        <h3>挂载阶段</h3>
        <p>当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：</p>
        <ul>
            <li>constructor(props)初始化数据,接收props</li>
            <li>static getDerivedStateFromProps()</li>
            <li>componentDidMount(),挂载阶段，可以发请求.组件已经被渲染到 DOM 中</li>
            <li>render()</li>
        </ul>
        <h3>更新阶段</h3>
        <p>当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：</p>
        <ul>
            <li>static getDerivedStateFromProps(props, state)## <strong>会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。</strong></li>
            <li>
                <p>shouldComponentUpdate(nextProps, nextState),该方法会在重新渲染前被触发，你可以在 shouldComponentUpdate 中返回 false 避免不必要渲染。## <strong>首次渲染或使用 forceUpdate() 时不会调用该方法。</strong></p>
            </li>
            <li>
                <p>
                    render() ##<strong>如果 shouldComponentUpdate() 返回 false，则不会调用 render()。也不会调用 componentDidUpdate()。</strong>
                </p>
            </li>
            <li>getSnapshotBeforeUpdate(prevProps, prevState) ## <strong>此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。</strong></li>
            <li>componentDidUpdate(prevProps, prevState, snapshot) ## <strong>会在更新后会被立即调用。首次渲染不会执行此方法。</strong></li>
        </ul>
        <h3>卸载阶段</h3>
        <p>当组件从 DOM 中移除时会调用如下方法：</p>
        <ul>
            <li>componentWillUnmount(),卸载阶段，清除计时器等 ## <strong>在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。</strong></li>
        </ul>
        <h3>错误处理</h3>
        <p>当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法： </p>
        <ul>
            <li>static getDerivedStateFromError()</li>
            <li>componentDidCatch()</li>
        </ul>
        <h3>其他API</h3>
        <p>component.forceUpdate(callback)强制让组件重新渲染。</p>
        <h3>Class 属性</h3>
        <p>CustomButton(组件名).defaultProps = （一个对象）可以为 Class 组件添加默认 props </p>
        <h3>高阶组件</h3>
        <p>高阶组件是参数为组件，返回值为新组件的函数。</p>
    </div>)
}

export default ReactInterview