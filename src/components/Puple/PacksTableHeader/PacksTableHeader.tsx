import c from '../PacksTableHeader/PacksTableHeader.module.css'

type PacksTableHeaderPropsType = {
    text: string
}
export const PacksTableHeader = ({text}: PacksTableHeaderPropsType) => {


    return <th>
        <div className={c.container}>
            <div>{text}</div>
            <div className={c.triangle}>
                <div >▲</div>
                <div >▼</div>
            </div>
        </div>
    </th>
}