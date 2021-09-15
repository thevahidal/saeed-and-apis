import SaeedWhateverIWant, { NotDefaultSaeed, AnotherNotDefaultSaeed } from '../Saeed'

const SaeedInFolder = (props) => {

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