import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import  Paragraph from '../../components/Paragraph'
import  Layout from '../../components/Layout'
import  Link from 'next/link/'


import { getAllProjectSlugs, getSingleProjectData } from '../../lib/api'
// The Waterfall

//1. Get a list of path to pre-render
export async function getStaticPaths() {
    const paths = await getAllProjectSlugs();
    return {
        paths,
        fallback: false
    }

}
//2.Get the data that belongs to each page
export async function getStaticProps({ params }) {
    const projectData = await getSingleProjectData(params.id);
    return {
        props : {
            projectData
        }
    }
}

//3.Use the data inside your SingleProjectPage page component
const SingleProjectPage = ({ projectData }) => {
    //console.log ({projectData});
    const { title, featuredImage, content } = projectData;
    return <Layout>
        {
            featuredImage &&
            <Image 
            src = {featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            width={featuredImage.node.mediaDetails.width}
            height={featuredImage.node.mediaDetails.height}
            />
        }
        <Container>
            
        <Heading level="1">{title}</Heading>
        <div dangerouslySetInnerHTML={{__html: content}} />
        <Paragraph>
            <Link href="/projects">
            <a>
            Back to all projects    
            </a>
            </Link>
            </Paragraph>
        </Container>
    </Layout>
}
export default SingleProjectPage;