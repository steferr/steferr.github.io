import { PRIMARY, PRIMARY_DARKER, GREY_DARK, GREY_MEDIUM } from './constants'

// TEXT styles

export const filterTitleStyle = {
  fontWeight: '500',
  color: GREY_DARK,
  fontSize: '12px',
  marginLeft: '8px',
  marginBottom: '4px',
}

export const primaryButtonStyle = {
  height: '32px',
  borderRadius: '100px',
  color: '#fff',
  backgroundColor: PRIMARY,
  fontWeight: '500',
  letterSpacing: '1.1px',
  outline: 'none',
  userSelect: 'none',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '12px',
  alignItems: 'center',
  padding: '0px 16px',
}

export const primaryButtonHoverStyle = Object.assign({}, primaryButtonStyle, {
  backgroundColor: PRIMARY_DARKER,
})

export const buttonFiltersStyle = {
  height: '32px',
  marginRight: '8px',
  borderRadius: '100px',
  color: 'rgba(25, 36, 59, 0.6)',
  backgroundColor: GREY_MEDIUM,
  fontWeight: '500',
  letterSpacing: '1.1px',
  outline: 'none',
  userSelect: 'none',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '12px',
  alignItems: 'center',
  padding: '0px 16px',
}

export const buttonFiltersActiveStyle = Object.assign({}, buttonFiltersStyle, {
  color: '#fff',
  backgroundColor: PRIMARY,
})


export const buttonHoverStyle = {
  backgroundColor: PRIMARY_DARKER,
}
