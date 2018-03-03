import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Flag,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Salvadoreños in Tech'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '2em',
            }}
        />
        <Header
            as='h2'
            content='Encouraging diversity in the tech community'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge'>
            Read our Mission Statement
            <Icon name='right arrow' />
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment id='hero' textAlign='center' style={{ minHeight: 500, padding: '1em 0em', backgroundColor: '#0047AB'}} vertical>

                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={false}
                            style={{backgroundColor: '#FFF'}}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>Home</Menu.Item>

                                <Menu.Item as='a'>About</Menu.Item>
                                <Menu.Item as='a'>Leadership</Menu.Item>
                                <Menu.Item as='a'>Values</Menu.Item>
                                <Menu.Item as='a'>Membership</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a'  primary={fixed} style={{ marginLeft: '0.5em' }}><Flag name='sv' /> Donate</Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>Home</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handleToggle} style={{ minHeight: '100vh' }}>
                        <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>Log in</Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>Our Mission</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Salvadoreños in Tech (SIT) was founded with a mission to help people who have either
                            immigrated from the country of <a href="https://en.wikipedia.org/wiki/El_Salvador"
                                                              target='_blank'>El Salvador</a>, or are descendants of
                            those who have. We focus on educating our
                            members in the field of tech.
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>Fighting for Diversity</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            It is a core belief of the organization that the increase should <b>not</b> be the result of
                            illegal hiring tactics which often favor groups based on ethnicity, but rather by increasing
                            the skill pool. Therefore we do not demand
                            that companies actively discriminate against other races, but simply that we ensure the
                            tools are available for our group to learn to become valueable members of the tech community.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image
                            bordered
                            rounded
                            size='large'
                            src='flag.jpg'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'> Join the Movement</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', backgroundColor: '#EBF2FA'}}>
                        <Header as='h3' style={{ fontSize: '2em' }}>Educating for Diversity</Header>
                        <p style={{ fontSize: '1.33em' }}>Ensuring Salvadorans have access to education necessary to start a career in tech.</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em', backgroundColor: '#EBF2FA'}}>
                        <Header as='h3' style={{ fontSize: '2em' }}>Diversity Without Compromise</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Maintain a fair representation of our community throughout the industry, without forcing companies to play by unfair rules.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        {/*<Segment style={{ padding: '8em 0em' }} vertical>*/}
            {/*<Container text>*/}
                {/*<Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>*/}
                {/*<p style={{ fontSize: '1.33em' }}>*/}
                    {/*Instead of focusing on content creation and hard work, we have learned how to master the art of doing*/}
                    {/*nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic*/}
                    {/*and worth your attention.*/}
                {/*</p>*/}
                {/*<Button as='a' size='large'>Read More</Button>*/}

                {/*<Divider*/}
                    {/*as='h4'*/}
                    {/*className='header'*/}
                    {/*horizontal*/}
                    {/*style={{ margin: '3em 0em', textTransform: 'uppercase' }}*/}
                {/*>*/}
                    {/*<a href='#'>Case Studies</a>*/}
                {/*</Divider>*/}

                {/*<Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>*/}
                {/*<p style={{ fontSize: '1.33em' }}>*/}
                    {/*Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really*/}
                    {/*true.*/}
                    {/*It took years of gene splicing and combinatory DNA research, but our bananas can really dance.*/}
                {/*</p>*/}
                {/*<Button as='a' size='large'>I'm Still Quite Interested</Button>*/}
            {/*</Container>*/}
        {/*</Segment>*/}

        <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#0047ab' , background: 'url("wavyflag.jpg")', backgroundSize: 'cover'}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Press' />
                            <List link inverted>
                                <List.Item as='a'>Press Contact Information</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h3' inverted>Salvadoreños in Tech</Header>
                            <p>Encouraging diversity in the tech community</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default HomepageLayout
