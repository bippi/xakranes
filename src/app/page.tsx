"use client";

import { 
  Contrast, 
  Type, 
  MapPin, 
  Search, 
  CheckCircle, 
  Clock, 
  Accessibility, 
  Car, 
  ArrowRight, 
  Mail, 
  Phone,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>The Civic Beacon</div>
          
          <nav className={styles.nav}>
            <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Voter Info</a>
            <a href="#" className={styles.navLink}>Candidates</a>
            <a href="#" className={styles.navLink}>Policies</a>
            <a href="#" className={styles.navLink}>Results</a>
          </nav>

          <div className={styles.headerActions}>
            <div className={styles.countdownLabel}>Election Day Countdown</div>
            <div className={styles.iconButtons}>
              <button className={styles.iconButton}>
                <Contrast size={20} />
              </button>
              <button className={styles.iconButton}>
                <Type size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.section}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.badge}
              >
                <span className={styles.badgeDot}></span>
                <span className={styles.badgeText}>Kjördagur í nánd</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={styles.title}
              >
                Hvar kýs ég?
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.description}
              >
                Upplýsingar um kjörstaði, opnunartíma og aðgengi fyrir íbúa Akraneskaupstaðar. Tryggðu að þín rödd heyrist í komandi kosningum.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className={styles.heroImageWrapper}
            >
              <div className={styles.heroImageContainer}>
                <img 
                  src="https://picsum.photos/seed/akranes-election/800/800" 
                  alt="Official election document" 
                  className={styles.heroImage}
                  referrerPolicy="no-referrer"
                />
                <div className={styles.heroImageOverlay}></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search Tool */}
        <section className={styles.section}>
          <div className={styles.searchCard}>
            <div className={styles.searchInner}>
              <div className={styles.searchContent}>
                <h2 className={styles.searchTitle}>Finndu þinn kjörstað</h2>
                <p className={styles.searchSubtitle}>Sláðu inn heimilisfang þitt á Akranesi til að sjá hvar þú átt að greiða atkvæði.</p>
                
                <div className={styles.searchForm}>
                  <div className={styles.inputWrapper}>
                    <MapPin className={styles.inputIcon} size={20} />
                    <input 
                      type="text" 
                      placeholder="Sláðu inn götuheiti..." 
                      className={styles.input}
                    />
                  </div>
                  <button className={styles.searchButton}>
                    <Search size={20} />
                    Leita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Polling Station & Map */}
        <section className={`${styles.section} ${styles.bentoGrid}`}>
          {/* Polling Station Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.infoCard}
          >
            <div className={styles.cardTop}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Íþróttahúsið Jaðarsbakkar</h3>
                <CheckCircle className={styles.verifiedIcon} size={24} />
              </div>
              <p className={styles.cardDesc}>
                Aðalkjörstaður Akraness. Gengið er inn um aðalinngang íþróttamiðstöðvarinnar.
              </p>
              
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Clock className={styles.infoIcon} size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Opnunartími</span>
                    <span className={styles.infoValue}>09:00 – 22:00</span>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Accessibility className={styles.infoIcon} size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Aðgengi</span>
                    <span className={styles.infoValue}>Fullt hjólastólaaðgengi og lyfta til staðar.</span>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Car className={styles.infoIcon} size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Bílastæði</span>
                    <span className={styles.infoValue}>Næg bílastæði beint fyrir utan.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <button className={styles.directionsButton}>
              Fá leiðbeiningar
              <ChevronRight size={18} />
            </button>
          </motion.div>

          {/* Map View */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mapCard}
          >
            <img 
              src="https://picsum.photos/seed/akranes-map/1200/800" 
              alt="Map of Akranes" 
              className={styles.mapImage}
              referrerPolicy="no-referrer"
            />
            <div className={styles.mapPinWrapper}>
              <div className={styles.relative}>
                <div className={styles.pinPulse}></div>
                <div className={styles.pin}>
                  <MapPin size={32} fill="currentColor" />
                </div>
              </div>
            </div>
            
            <div className={styles.mapLabel}>
              <div className={styles.mapLabelIcon}>
                <Car size={24} />
              </div>
              <div className={styles.mapLabelText}>
                <p>Vogabraut 1</p>
                <p>300 Akranes</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Alternative Voting Info */}
        <section className={styles.section}>
          <div className={styles.altVotingGrid}>
            <div>
              <h2 className={styles.altVotingTitle}>Aðrar atkvæðagreiðslur</h2>
              <div className={styles.altVotingList}>
                {[
                  { title: "Utankjörfundaratkvæðagreiðsla", desc: "Hægt er að kjósa á skrifstofu Sýslumanns ef þú ert forfallaður á kjördag." },
                  { title: "Atkvæðagreiðsla bréfleiðis", desc: "Upplýsingar fyrir kjósendur sem staddir eru erlendis eða geta ekki mætt á kjörstað." },
                  { title: "Aðstoð við atkvæðagreiðslu", desc: "Réttur þinn til aðstoðar í kjörklefanum og hvernig hún er veitt." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className={styles.altVotingItem}
                  >
                    <h4 className={styles.altVotingItemHeader}>
                      {item.title}
                      <ArrowRight size={20} className={styles.arrowIcon} />
                    </h4>
                    <p className={styles.altVotingDesc}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactBgIcon}>
                <Mail size={240} />
              </div>
              <h3 className={styles.contactTitle}>Ertu með spurningu?</h3>
              <p className={styles.contactDesc}>
                Kjörstjórn Akraness er til staðar til að tryggja að allir geti nýtt kosningarétt sinn.
              </p>
              
              <div className={styles.contactInfo}>
                <a href="mailto:kjorstjorn@akranes.is" className={styles.contactLink}>
                  <div className={styles.contactIconCircle}>
                    <Mail size={20} />
                  </div>
                  kjorstjorn@akranes.is
                </a>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactLink}>
                    <div className={styles.contactIconCircle}>
                      <Phone size={20} />
                    </div>
                    433 1000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.footerLogo}>The Civic Beacon</div>
            <p className={styles.footerCopyright}>
              © 2024 Akranes Municipality Election Committee. All rights reserved.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Contact Committee</a>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Accessibility Statement</a>
            <a href="#" className={styles.footerLink}>Municipality Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
