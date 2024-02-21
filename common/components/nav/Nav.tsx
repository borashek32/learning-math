import React, { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native"
import { LogoSmall } from "../logo/LogoSmall"
import { DefaultButton } from "../buttons/DefaultButton"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectUserEmail } from "../../../features/auth/auth.selectors"
import { useTranslation } from "react-i18next"
import { PATHS } from "../../constants/paths"
import { SelectLang } from "../selectLang/SelectLang"
import * as Animatable from 'react-native-animatable'
import { NavLinkButton } from "../buttons/NavLinkButton"

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const userEmail = useAppSelector(selectUserEmail)
  const { t } = useTranslation()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <View style={styles.header}>
        <LogoSmall />
        <View style={userEmail ? styles.headerWithUser : {}}>
          <DefaultButton title={userEmail} path={PATHS.PROFILE} />
          <TouchableOpacity style={styles.menu} onPress={toggleMenu}>
            <Animatable.View 
              style={[styles.line, menuOpen && styles.lineActive]} 
              animation={menuOpen ? 'rotate' : null} 
              duration={300} 
              easing="ease-in-out"
            >
              <View style={[styles.line, menuOpen && styles.firstLineActive]}></View>
              <View style={[styles.line, menuOpen && styles.middleLineActive]}></View>
              <View style={[styles.line, menuOpen && styles.lineActive]}></View>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
      {userEmail && menuOpen && (
        <View style={styles.navigation}>
          <View style={styles.menuItems}>
            <NavLinkButton title={t("nav.items.home")} path={PATHS.HOME} />
            <NavLinkButton title={t("nav.items.mathOperations")} path={PATHS.MATH_OPERATIONS} />
            <NavLinkButton title={t("nav.items.instructions")} path={PATHS.INSTRUCTIONS} />
            <View style={styles.footerDevideLine}></View>
            <NavLinkButton title={t("nav.items.profile")} path={PATHS.PROFILE} />
            <NavLinkButton title={t("nav.items.score")} path={PATHS.SCORE} />
            <DefaultButton title={t("buttons.logout")} path={PATHS.LOGOUT} />
            <SelectLang />
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    height: 80,
    width: "100%",
  },
  headerWithUser: {
    paddingRight: 20,
    width: Dimensions.get("window").width - 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  userEmail: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
  menu: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  
  line: {
    width: 40,
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  lineActive: {
    transform: [{ rotate: '45deg' }],
    backgroundColor: "#fff",
  },
  firstLineActive: {
    transform: [{ rotate: '-45deg' }],
    backgroundColor: "#fff",
    top: 12,
    position: 'absolute',
    zIndex: 1000
  },
  middleLineActive: {
    backgroundColor: '#01143d'
  },

  navigation: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "100%",
    backgroundColor: "#01143d",
    justifyContent: "flex-start",
    marginTop: 70,
    alignItems: "center",
  },
  menuItems: {
    paddingTop: 40,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  item: {
    marginBottom: 10,
  },
  itemLink: {
    color: "#fff",
    textDecorationLine: "none",
  },
  footerDevideLine: {
    height: 2,
    width: "100%",
    backgroundColor: "#61dafb",
  },
})
