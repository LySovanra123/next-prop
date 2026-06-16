'use client'

import UserCard from "@/components/object-prop/object-prop-page"

const ObjectProp = () => {

    return (
        <div>
            <UserCard user={{id:1,name:"vanra",age:22,address:"Phnom Penh"}}/>
        </div>
    )
}

export default ObjectProp