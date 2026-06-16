import TodoList from "@/components/array-prop/array-prop-page"

const ArrayPage = ()=>{

    const numbers:string[] = ["1","2","3","4","5","6"]

    return(
        <TodoList todos={numbers}/>
    )
}
export default ArrayPage