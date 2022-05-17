import Col from '../../components/Col'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'
import Row from '../../components/Row'


import { getProjects } from '../../lib/api'

export async function getStaticProps() {
    const projects = await getProjects();

    return  {
        props : {
            projects
        }
    }
}

const ProjectsPage = ({ projects }) => {
    

    return <Layout>
        <Container>
            <Heading level="1">Projects</Heading>
            <Row>
                {projects.map((project, index) => {
                    const { title, slug, image } = project;

                    return <Col 
                    key={index}
                    xs="6"
                    sm="4"
                    md="3"
                    >
                        {/*featuredImage &&
                            <Image
                                src={featuredImage.node.sourceUrl}
                                alt={featuredImage.node.altText}
                                width={featuredImage.node.mediaDetails.width}
                                height={featuredImage.node.mediaDetails.height}
                            />
                        */}

                        {image &&
                        <Image 
                        src = {`/images/${image}`}
                        alt={title}
                        width={1500}
                        height={1000}
                        layout="responsive"
                         />
                        }
                        
                        <Heading level="3">
                            {title}
                        </Heading>
                        <Paragraph>
                            <Link href={`/projects/${slug}`}>
                            <a>
                                view project
                            </a>
                            </Link>
                        </Paragraph>

                    
                    </Col>
                })}  
            </Row>
        </Container>
    </Layout>
}
export default ProjectsPage;