import React from 'react'
import {
  FacebookIcon,
  GithubIcon,
  MailIcon,
} from '@/components/common/Icons/Icons'
import Logo from '@/components/common/Logo/Logo'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0;
  font-weight: 100;
  text-align: left;
  width: 100%;
`

const ListItem = styled.li`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.025rem;
`

const ListItemLink = styled(Link)`
  color: var(--color-slate-blue);
  text-decoration-line: none;
  text-transform: capitalize;
  &:hover {
    color: white;
  }
`

const SocialList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 0 0.75rem;
`

const SocialListItemLink = styled(Link)`
  color: var(--color-slate-blue);
  &:hover {
    color: white;
  }
`

const SiteLink: React.FC = () => {
  return (
    <div className='bg-midnightBlue relative z-0 text-white pt-16 pb-8 px-4'>
      <div className='mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between'>
        <Logo />
        <div className='w-2/3 block sm:flex text-sm mt-6 lg:mt-0'>
          <List>
            <ListItem>Rideshare</ListItem>
            <ListItem>
              <ListItemLink to='/#'>About</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink to='/#'>Jobs</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink to='/#'>Blog</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink to='/#'>Legal Notice</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink to='/#'>Privacy Policy</ListItemLink>
            </ListItem>
          </List>
          <List>
            <ListItem>to travel</ListItem>
            <ListItem>
              <ListItemLink to='/#'>Destinations</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink to='/#'>Terms of service</ListItemLink>
            </ListItem>
          </List>
          <List>
            <ListItem>Follow us</ListItem>
            <SocialList>
              <SocialListItemLink to='/#'>
                <FacebookIcon className='h-5 w-5' />
              </SocialListItemLink>
              <SocialListItemLink to='/#'>
                <GithubIcon className='h-5 w-5' />
              </SocialListItemLink>
              <SocialListItemLink to='/#'>
                <MailIcon className='h-5 w-5' />
              </SocialListItemLink>
            </SocialList>
          </List>
        </div>
      </div>
      <div className='mt-4 pt-6 text-slateBlue border-t border-slateBlue text-center'>
        © 2024 Rideshare. All rights reserved.
      </div>
    </div>
  )
}

export default SiteLink
