import './Article.css';
import Card from './Card.js'

function Article(params)
{
    return(
        <div className='app'>
            {
                Object.keys(params.db).map(
                    elem =>
                    {
                        return <Card human={params.db[elem]} />
                    }
                )
            }
            <Card human={params.db[0]}/>
        </div>
    );
}

export default Article;