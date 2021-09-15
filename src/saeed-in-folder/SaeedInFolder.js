import { useEffect } from 'react'

import SaeedWhateverIWant, { NotDefaultSaeed, AnotherNotDefaultSaeed } from '../Saeed'

const SaeedInFolder = (props) => {
    useEffect(() => {
        console.log('SaeedInFolder mounted');
    }, [])

    return (<div>
        <SaeedWhateverIWant />
        <NotDefaultSaeed />
        <AnotherNotDefaultSaeed />
        <h3 style={{
            color: 'red'
        }}>
            Saeed in folder is here.
        </h3>
    </div>)
} 

export default SaeedInFolder