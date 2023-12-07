import { data } from "../assets"
import { useDragAndDrop } from "../hooks/useDragAndDrop"
import { Status } from "../interfaces"
import { ContainerCards } from "./ContainerCards"


const typesHero: Status[] = ['آ', 'ب', 'س','د','ت']
const typesHero2: Status[] = ['کلمه سوم','کلمه دوم','کلمه اول','کلمه ششم','کلمه پنجم','کلمه چهارم']



export const DragAndDrop = () => {
    const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

    return (
        <>
       <br></br>
       
        <h1>بخش جمله سازی</h1>
        
        <br></br>
        <br></br>
        <br></br>
        <div className="grid" >
                {typesHero2.map(container => (
                    <ContainerCards
                        items={listItems}
                        status={container}
                        key={container}
                        
                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList} />

                ))}
        </div>
        <br></br>
        <br></br>
        <br></br>
        
       
   
        <h1>------------------- کلمه ها -------------------</h1>
        <br></br>   
        <br></br>
        <br></br>
        <br></br>
        <br></br> 
        
        <div className="grid">
            {typesHero.map(container => (
                <ContainerCards
                    items={listItems}
                    status={container}
                    key={container}

                    isDragging={isDragging}
                    handleDragging={handleDragging}
                    handleUpdateList={handleUpdateList} />

            ))}
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>

       

        
       
        </>

        
        
    )
}