'use client'

import { useState } from 'react'
import FunctionProp from '@/components/function-prop/function-prop-page'

const FunctionPage = () => {
    const [result, setResult] = useState(0) //State

    function Sum() {
        setResult(result + 1)
    }

    function Sub() {
        setResult(result - 1)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <FunctionProp sum={Sum} sub={Sub} result={result.toString()} />
        </div>
    )
}

export default FunctionPage