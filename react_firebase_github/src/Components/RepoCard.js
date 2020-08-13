import React ,{useState,useEffect} from 'react'
import Axios from "axios"
import {ListGroup,ListGroupItem} from "reactstrap"

function RepoCard({repos_url}) {

    const [repos,setRepos] = useState([])

    const fetchRepos = async () =>{
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() =>{
        fetchRepos()
    } , [repos_url])

    return (
        <ListGroup>
            {repos.map( repo =>(
                <ListGroupItem key = {repo.id}>
                    <div className="text-primary">
                        {repo.name}
                    </div>
                    <div className="text-primary">
                        {repo.language}
                    </div>
                    <div className="text-secondary">
                        {repo.description}
                    </div>
                    <div className="text-info">
                        {repo.default_branch}
                    </div>
                </ListGroupItem>
            ))}

            
        </ListGroup>
    )
}

export default RepoCard
