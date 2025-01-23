# Product Requirements Document (PRD): Becoming Man Movement

## 1. Project Overview

**Name**: Becoming Man Website & Community  
**Purpose**: An invite-only platform for the Becoming Man Movement, focusing on community engagement (Threads), commerce (merchandise, courses, coaching), and admin management.

## 2. Scope & Milestones

### Phase 1 (High Priority)
* Landing Page
* User Registration & Authentication (invite codes, Google/Apple sign-in)
* Basic User Profile (bio, profile picture)
* Thread Creation & Management (public, sponsored, private/pay-to-access)
* Admin Dashboard (basic controls for user/thread management)

### Phase 2 (Next Priority)
* Catalog of Offerings (merch, courses, coaching)
* Stripe Integration (payment for private threads, merch, courses)
* Notifications (in-app, email, push)

### Phase 3 (Future Enhancements)
* Advanced Analytics & Reporting (user engagement, thread popularity, sales)
* Additional Admin Tools (invite code management, advanced moderation)
* Theming & Branding Refinements (seasonal accent colors)
* Mobile Push Notifications

## 3. Core Assumptions & Technologies

1. **Framework**: Nuxt 3
2. **Styling**: Tailwind CSS (light/dark themes, male-focused design in black & white)
3. **Backend/DB**: Supabase
4. **Payment**: Stripe
5. **User Base**: ~500 initial users (focus on invite-only growth)
6. **State Management**: Pinia with Nuxt

## 4. Features & Requirements

### 4.1 Landing Page

**Description**: A concise introduction to the Becoming Man Movement, guiding users to register or sign in.

**Requirements**:
* Hero Section
  * Engaging Headline / Subtitle
  * "More Than A Movement" Button
    * Links to anchors on about section
* About Section
  * Becoming Man Movement
    * BECOMING MAN is a movement of God, birthed in the heart of Pastor IV Marsh. It is centered around returning men to their proper purpose on the earth; something that is so needed in our culture today. You don't have to look very far back into the annuals of American history to see that honorable men are disappearing before our very eyes. Honorable men who demonstrated true masculinity. Men who were a man's man, a man who not only demonstrates the physical qualities of ruggedness but who also possess mental toughness and emotional strength. A man who says what he means and means what he says. A man who recognizes the importance of honesty. A man of noble principle. A man without covetousness. A man who cannot be bribed or bullied. A man committed to manly virtues. A man who is the head of his home and knows how to control and discipline his children. A man who loves justice but also knows tenderness and mercy. A man who fears God and shows reverence for that which is sacred. A man who knows the difference between the rule of law and the lust for power. On the whole, our society today has little tolerance for such men. Even in our churches, masculinity is dying. BECOMING MAN seeks to reverse the current trend in our culture as we take men on a journey of self-discovery and self-mastery.
    * The BECOMING MAN Level Requirements are designed to guide men along the path of transformation into a mature son of God. At each level, there are requirements intended to display the attributes of Christ: Prophet, Priest, King, and Warrior. While one could certainly progress mechanically through the levels with no heart change, this is not the intent. Our deepest desire is that we all be transformed into the likeness of Jesus. 
* Beliefs
  * Mission Statement
    * BECOMING MAN IS A MOVEMENT CENTERED AROUND RETURNING HONOR TO MANHOOD BY MEN LEARNING TO BE PROPHET, PRIEST, KING, AND WARRIOR
  * Vision Statement
    * BECOMING MAN is committed to partner with local organizations and churches to change the hearts of men in order to change the world.  If you change a man you change a family.  If you change a family you change a community.  If you change a community you change a state.  If you change a state you change a country.  If you change a country you change the world - one man at a time.
  * Statement of Belief
    * We hold to the basic doctrines of biblical faith.
    * We believe the Bible to be the inspired, infallible, and authoritative Word of God.
    * We believe in the deity of Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.
    * We believe that the salvation of lost and sinful people is accomplished by grace alone through faith in Jesus Christ alone, by the regenerating power of the Holy Spirit.
    * We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a Godly life.
    * We believe in the resurrection of both the saved and the lost, those who are saved to the resurrection of life and those who are lost to the resurrection of damnation.
  * Manhood
    * We believe that the Bible teaches that men are foundational. As go the men, so go the marriages, families, churches, communities and the culture.
    * God created men and women equal but not the same. He bestowed upon men unique roles of Prophet, Priest, King, and Warrior to teach God's Word to their wives, families, and friends, to serve their families, God's people and church, to provide for their families and churches and to protect their marriages, families and churches. However, we live in the first generation in history that's confused about what it means to be a man. There's a fatherlessness crisis today because there's a crisis in manhood.
    * Building a tribe of men, calling them out and up to the high, noble masculinity only found in Christ Jesus, and discipling in the gospel are the biggest challenges the church faces today. Jesus Christ is the ultimate Prophet, Priest, King, and Warrior who rescued us from sin and death, redeemed our fallen masculinity and set us truly free. Our hope is built on Him and Him alone.
  * Commitment
    * Rationale
      * We have been moved in our purpose by the following contemporary developments which we observe with deep concern:
        * The widespread uncertainty and confusion in our culture regarding the complementary differences between masculinity and femininity
        * The tragic effects of this confusion in unraveling the fabric of marriage woven by God out of the beautiful and diverse strands of manhood and womanhood
        * The increasing promotion given to feminist egalitarianism with accompanying distortions or neglect of the glad harmony portrayed in Scripture between the loving, humble leadership of redeemed husbands and the intelligent, willing support of that leadership by redeemed wives
        * The growing claims of legitimacy for sexual relationships which have Biblically and historically been considered illicit or perverse, and the increase in pornographic portrayal of human sexuality
        * The upsurge of physical and emotional abuse in the family
    * Affirmations
      * Based on our understanding of Biblical teachings, we affirm the following:
        * Both Adam and Eve were created in God's image, equal before God as persons and distinct in their manhood and womanhood - (Gen 1:26-27, 2:18).
        * Distinctions in masculine and feminine roles are ordained by God as part of the created order, and should find an echo in every human heart - (Gen 2:18, 21-24; 1 Cor 11:7-9; 1 Tim 2:12-14).
        * Adam's headship in marriage was established by God before the Fall, and was not a result of sin - (Gen 2:16-18, 21-24, 3:1-13; 1 Cor 11:7-9).
        * The Fall introduced distortions into the relationships between men and women - (Gen 3:1-7, 12, 16).
          * In the home, the husband's loving, humble headship tends to be replaced by domination or passivity; the wife's intelligent willing submission tends to be replaced by usurpation or servility.
          * In the church, sin inclines men toward a worldly love of power or an abdication of spiritual responsibility, and inclines women to resist limitations on their roles or to neglect the use of their gifts in appropriate ministries.
        * The Old Testament, as well as the New Testament, manifests the equally high value and dignity which God attached to the roles of both men and women (Gen 1:26-27, 2:18; Gal 3:28). Both Old and New Testaments also affirm the principle of male headship in the family and in the covenant community (Gen 2:18; Eph 5:21-33; Col 3:18-19; 1 Tim 2:11-15).
        * Redemption in Christ aims at removing the distortions introduced by the curse. In the family, husbands should forsake harsh or selfish leadership and grow in love and care for their wives; wives should forsake resistance to their husbands' authority and grow in willing, joyful submission to their husbands' leadership (Eph 5:21-33; Col 3:18-19; Tit 2:3-5; 1 Pet 3:1-7).
        * In all of life Christ is the supreme authority and guide for men and women, so that no earthly submission-domestic, religious, or civil-ever implies a mandate to follow a human authority into sin (Dan 3:10-18; Acts 4:19-20, 5:27-29; 1 Pet 3:1-2).
        * We are convinced that a denial or neglect of these principles will lead to increasingly destructive consequences in our families, our churches, and the culture at large.
* Founder & CEO Section
  * Pastor IV Marsh
  * IV Marsh is a pastor, entrepreneur, author, marriage and leadership coach. He leads BCOMING.CHURCH, a mega multi-site church with his wife, Bené.  Epic was planted in 2007, now with multiple campuses reaching 5,000 people weekly in the United States and in multiple countries. IV is the founder and CEO of Lead Now, a veteran owned business committed to inspiring and equipping leaders and leadership teams throughout the business world. He is also the founder and CEO of the IAM4 Men's Movement (now Becoming Man) and Warrior Evolution. Warrior Evolution is a 75 hour intensive that empowers men in spirit, soul, and body. A native of North Alabama, IV served in the United States Air Force with a majority of his career in Panama City, Panama fighting the war on drugs. He became involved in law enforcement before stepping into full-time ministry. IV and Bené have been married since 1994 and have three grown children and two daughters-in-law.
  * Social Media Links
    * Instagram
    * X
    * Youtube
* Why manhood matters section
  * There are 113,000,000 men in America over the age of 15. 69,000,000 of these men make no profession of faith in Christ. 90 million men are not involved in any kind of discipleship, with only 6 million men are involved in discipleship (1 out of every 18 men)
  * More than 90 percent of American men believe in God, and 5 out of 6 calls themselves Christians, but only 2 out of 6 attend church on a given Sunday. The typical U.S. Congregation draws an adult crowd that's 61% female, 39% male. This gender gap shows up in all age categories. The average man accepts the reality of Jesus Christ, but fails to see any value in going to church. Churches overseas report gender gaps of up to 9 women for every adult man in attendance. 
  * On any given Sunday, there are 13 million more adult women than men in America's churches. This Sunday almost 25 percent of married, churchgoing women will worship without their husbands. Midweek activities often draw 70 to 80 percent female participants. The majority of church employees are women (except for ordained clergy, who are overwhelmingly male).  75% of volunteers are women (one mainline pastor said it was 99% in his church). 
  * In America, fewer than 10% of U.S. churches are able to establish or maintain a vibrant men's ministry, with fewer than 1% of churchgoing men participating in any sort of ongoing men's ministry program. 4 out of 5 students in evangelical churches will drop out of church by their senior year in high school. Over 70 percent of the boys who are being raised in church will abandon it during their teens and twenties. Many of these boys will never return.
  * Christian universities are becoming convents. The typical Christian college in the U.S. enrolls almost 2 women for every 1 man, with the average ratio of men to women in Christian colleges at about 1 male to every 3 females. 
  * Fatherhood Matters
    * 33% of the 72 million children in America will go to bed without their biological father in the home. Fatherless children are five times as likely to live in poverty, repeat a grade, and have emotional problems. 93% of all people incarcerated are men and 85% of them have no father figure.
    * 3.5% family gets saved if the child is saved first.
    * 17% family gets saved if the mother is saved first.
    * 93% family gets saved if the father is saved first.
    * When a mother comes to Christ, her family will join her at church only 17% of the time; but when a father comes to Christ, his family joins him 93% of the time. 95% of men who attend a conference make a life-changing decision. 60% get connected to a small group. 25% make a first decision for Christ.
  * Men in the Church
    * For every 10 Men in the church
      * 9 will have kids who leave the church
      * 8 will not find their jobs satisfying
      * 6 will pay the monthly minimum on their credit cards
      * 5 will have major problems with pornography
      * 4 will get divorced affecting 1,000,000 children per year
    * As many as 70% of men have actively sought out pornography this year. This year as many Christians will divorce as non-Christians.
* "Sign Up" / "Log In" calls to action
* Theming: black/white with dynamic accent color
  * Accent color changes based on a variable set by the admin.
  * Dark Mode / Light Mode toggle

### 4.2 Warrior Evolution Page

**Description**: A page dedicated to the Warrior Evolution program.

**Requirements**:
* Subpage Header section
  * Engaging Headline / Subtitle
    * Become part of a tribe of Kingdom men who are dedicated to living Kingdom lives in a Kingdom brotherhood in the pursuit of living life to the fullest; a tribe of men who do life together, business together, collectively moving God's Kingdom forward at a rate that most men will never experience in their lifetime. A tribe known as BECOMING MAN Warrior Evolution.
  * Link to register for the program
    * Apply Now
* The Expeirence Section
  * High overview of the program
  * WHAT IF, OVER THE COURSE OF 75 HOURS, YOU COULD TAP INTO A LIMITLESS SOURCE OF POWER YOU NEVER KNEW EXISTED? IMAGINE MOVING THROUGH LIFE WITH TOTAL CONFIDENCE IN YOUR ABILITY TO ACTUALLY HAVE THE LIFE, MARRIAGE, AND FINANCES YOU DESIRE. THAT'S WHAT BECOMING MAN WARRIOR EVOLUTION CAN DO FOR YOU.
  * IT'S A TEST THAT CONNECTS YOU TO THE VERY CORE OF IAM4. WARRIOR EVOLUTION IS BRUTAL. NO, IT'S NOT FOR EVERYONE. YOU MAY NOT QUALIFY, OR MAKE IT THROUGH THE TRAINING. BUT, IF YOU'RE READY FOR THIS CHALLENGE, YOU'LL FIND IT TO BE AN EXPERIENCE THAT CHANGES YOUR LIFE, FOREVER.
  * YOU WERE CREATED TO BE - PROPHET, PRIEST, KING, AND WARRIOR. 
* The Outcome Section
  * OUR DESIRE IS NOT MERELY TO PHYSICALLY TAX YOU FOR THE SAKE OF PUSHING YOU, BUT RATHER, TO HELP YOU DEVELOP MENTAL FORTITUDE AND VISION THAT IS ALREADY INSIDE OF YOU, BUT YOU ARE NOT AWARE OF. ONCE YOU SEE WHO YOU ARE, WHO'S YOU ARE, AND WHAT'S AVAILABLE TO YOU, IT BECOMES IMPOSSIBLE TO EVER SETTLE FOR LESS IN YOUR LIFE.
  * IN THESE 75 HOURS, YOUR WARRIOR SPIRIT WILL EVOLVE AS YOU DISCOVER SELF DISCIPLINE & FOCUS WHILE YOU SHARPEN YOUR MIND, WILL, & EMOTIONS. YOUR ABILITY TO BE TOTALLY AWARE ON YOUR WHOLE LIFE WILL BE ENHANCED AND YOU WILL LEARN TO PURSUE UNTIL YOU REACH A PLACE OF LIVING LIFE TO THE FULLEST.
  * EVERY ASPECT OF YOUR SPIRIT, SOUL, AND BODY WILL BE TRAINED AND TESTED IN THESE 75 HOURS TOUCHING THE SIX PILLARS OF LIFE: PHYSICAL, MENTAL, EMOTIONAL, RELATIONAL, FINANCIAL, & SPIRITUAL. BY PUSHING YOU BEYOND YOUR SELF IMPOSED LIMITS, YOUR BELIEF OF WHO YOU ARE, WHO'S YOU ARE, AND WHAT'S AVAILABLE TO YOU WILL BE REVOLUTIONIZED.
* Coaches Section
  * Coach Name
  * Coach Short Bio
  * Coach Picture
  * Coach Social Media Links
* Transformation you can Expect and What you will be exposed to section
  * Transformation you can Expect
    * LEARN TO OVERCOME THE THREE DEFAULTS THAT KILL EVERY MAN'S POTENTIAL IN LIFE
    * CONNECT SPIRIT, SOUL, & BODY
    * THE ABILITY TO BE COMPLETELY AWARE & CONCENTRATE
    * THRIVE IN STRESSFUL SITUATIONS
    * HOW TO FOCUS ON YOUR VISION & WHAT'S AVAILABLE TO YOU
    * KILL THE A.N.T.S. (AUTOMATIC NEGATIVE THOUGHTS)
    * DEVELOP A TRUTHFUL VIEW OF YOURSELF
    * DEVELOP G.R.I.T
    * KNOW HOW TO CONTROL YOUR EMOTIONS
    * STOP DISTRACTIONS FROM DESTROYING YOUR LIFE
    * BE ABLE TO MAKE RIGHT DECISIONS AT THE RIGHT TIME TO MAKE THE RIGHT THINGS HAPPEN, REGARDLESS OF THE SITUATION
  * What you will be exposed to
    * HOW TO HAVE AND DEVELOP A MORNING ROUTINE THAT WORKS
    * HOW TO SET AND ACHIEVE S.M.A.R.T. GOALS
    * EXTREME PHYSICAL EXERCISE DESIGNED TO PUSH YOU PAST YOUR QUIT METER
    * SELF DEFENSE
    * FIREARMS INSTRUCTION WITH REAL LIFE SHOOTING SCENARIOS
    * TIME FOR AFTER ACTION REVIEWS TO HELP YOU NAVIGATE LIFE
    * LEADERSHIP PRINCIPLES FOR LIFE, MARRIAGE, & BUSINESS
    * HOW TO BE A SUCCESSFUL MENTOR TO OTHER MEN & TO YOUR CHILDREN
* The Standards (Prerequisites)
  * BE A MAN
  * Physical Requirements
    * 50 push-ups in 2 minutes
    * 50 sit-ups in 2 minutes 
    * 50 air squats in 2 minutes
    * 5 dead hang pull-ups
    * 1 mile run in under 10 minutes (in boots & utility pants)
  * Minimum age: 25 years old
  * Medical Clearance Required For:
    * Type 1 Diabetes (insulin dependent)
    * Heart/valvular shunts or stents
    * History of seizures
    * Hyperthyroid
    * Current prescription pain medications
  * Required Gear
    * Clothing
      * 3+ pairs black BDU ripstop pants
      * 2 pairs compression shorts
      * 1 pair broken-in boots
      * 8+ black crew neck t-shirts
      * 3 pairs black workout shorts
      * Socks (layered for hiking)
      * Running shoes
      * Optional: Black floppy/boonie hat for sun protection
    * Equipment
      * Black BDU utility belt
      * 9mm handgun with 3 magazines and retention holster
      * Sleeping bag
      * 3 towels
      * Personal toiletries
* Transportation
  * YOU ARE RESPONSIBLE FOR YOUR TRANSPORTATION TO AND FROM OUR FACILITY.
  * ALL TRANSPORTATION DURING WARRIOR EVOLUTION IS PROVIDED BY US.
  * WE RECOMMEND THE FOLLOWING AIRPORTS IF AIR TRAVEL IS REQUIRED:
    * HUNTSVILLE INTERNATIONAL AIRPORT
    * BIRMINGHAM INTERNATIONAL AIRPORT
    * NASHVILLE INTERNATIONAL AIRPORT

### 4.3 User Authentication

**Description**: Invite-only registration with social login options.

**Requirements**:
* **Invite Code**: Must be validated upon registration (admin-generated)
* **Social Sign-In**: Google
* **Use Nuxt Server Route**: /api/confirm-invite.post.ts
* **Use Service Role with Supabase Client**: This will require a supabase client that has the service role key.
* **Store user and profile information in Pinia Store**: Once users are authenticated, we store informaiton in the pinia store for easy access

Proposed Implementation:
* Invite Code: Admin generates invite codes and sends them to users.
* USers are directed to an invite page where they can input their code to get verified, this will post to the /api/confirm-invite.post.ts route and check if the code is valid and hasnt already been used.
* We will use the supabase service role to check the code and assign the user a role. This will require a supabase client that has the service role key.
* if the code is valid they have the option to sign in with google, we will pass a role id to the google oauth flow
* The google oath flow will redirect them to a confirm page where they will then be assigned a role and redirected to the dashboard. If the users do not have a role they will be redirected to the invite page. (this is to capture people who try to sign in with google without an invite code)

### 4.4 Dashboard Section

**Description**: The dashboard is the main hub for the user. It will have a sidebar with navigation links and a header with the logo and a toggle for dark mode. The dashboard will have a main content area that will be used to display the different sections of the app.

**Requirements**:
* The dashboard will have a sidebar with navigation links and a header with the logo and a toggle for dark mode.
* The dashboard will have a main content area that will be used to display the different sections of the app.

- The links will be specific to logged in in users
  - Link to Threads Page
  - Link to Events Page
  - Link to Warrior Evolution Content Page
  - Link to Catalog Page
- The dashboard will have a main content area that will display various sections of the app
  - There will be a welcome section that will display the users name and a welcome message
  - There will be a quick stats section
    - Total Members
    - Threads
    - Events
  - There will be a latest news and activity section.

### 4.5 User Profile Page

**Description**: The user profile page will display the users profile information. This will also show the users roles and any other relecant information.

**Requirements**:
* The user profile page will display the users profile information. This will also show the users roles and any other relecant information.
* The user profile page will have a way to edit the users profile informaiton and submit changes.
* The user profile page will use the user store from Pinia to sync the data information. 
* Updates to the user will be stored in our profile table in supabase. 
* Form will support validation and error handling.

Fields required for the profile page that can be edited by the user:
- Full Name (text) - required
- Email (text) - required
- Profile Image (image)
- Biography (text)
- Instagram Handle (text)
- X Handle (text)
- Youtube Handle (text)

### 4.6 Threads System

**Description**: Main community interaction hub.

**Requirements**:
* **Types**: Public, Sponsored (coaches/admins), Private (pay-to-access)
* **Media**: Text, images, optional video links (hosted externally or via Supabase storage)
* **Engagement**: Users can post, comment, and react (e.g., likes)

### 4.7 Catalog & Commerce (Phase 2)

**Description**: Offers merchandise, courses, coaching sessions.

**Requirements**:
* Product listings (images, descriptions, pricing)
* Course scheduling (in-person, online)
* 1-on-1 coaching booking system
* Stripe payment integration (checkout, refunds, receipts)

### 4.8 Notifications

**Description**: In-app, email, and optional push.

**Requirements**:
* Users can opt in/out of specific notification types
* Email for important updates (thread replies, purchases, invites)
* Push notifications for mobile (Phase 3 feasibility)

### 4.9 Analytics & Tracking (Phase 3)

**Description**: Measure platform usage, engagement, and sales performance.

**Requirements**:
* Track user sign-ups, thread activity, purchases
* Sales metrics (revenue per offering, total sales)
* Reporting dashboards in Admin Panel

### 5.0 Admin Dashboard

**Description**: Centralized management of users, content, and commerce.

#### 5.1 User Management System

**Description**: A comprehensive user management interface for administrators to manage platform users.

**Core Features**:
1. **User List View**
   - Grid/table display of all users
   - Sortable columns
   - Search/filter functionality
   - Pagination
   - Quick view of essential information:
     - Full Name
     - Email
     - Roles
     - Social Media Links
     - Profile Image

2. **User Profile Modal**
   - Triggered by clicking a user in the list
   - Modern, responsive design supporting dark/light modes
   - Sections:
     * Profile Information
       - Full Name (text input)
       - Email (text input)
       - Profile Image (with preview)
       - Biography (textarea)
     * Social Media Links
       - Instagram URL (text input)
       - X/Twitter URL (text input)
       - YouTube URL (text input)
     * Role Management
       - Current roles display
       - Add/remove roles functionality
       - Role assignment history
     * Invite Code Generation
       - Generate new invite code button
       - View previously generated codes
       - Code status (used/unused)
     * Account Actions
       - Save Changes button
       - Delete User button (with confirmation)

3. **User Deletion Flow**
   - Confirmation modal with warning
   - Explanation of consequences
   - Require admin password confirmation
   - Cascade deletion handling:
     * Remove profile_role entries
     * Remove profile entry
     * Revoke authentication access

**Technical Implementation**:

1. **Database Operations**:
   ```sql
   -- Profile Table
   profile (
     id INT PRIMARY KEY,
     bio TEXT,
     profile_img TEXT,
     email TEXT,
     full_name TEXT,
     instagram_url TEXT,
     twitter_url TEXT,
     youtube_url TEXT
   )

   -- Role Table
   role (
     id INT PRIMARY KEY,
     role_name TEXT
   )

   -- Profile Role Junction
   profile_role (
     profile_id INT REFERENCES profile(id),
     role_id INT REFERENCES role(id),
     assigned_at TIMESTAMPTZ,
     PRIMARY KEY (profile_id, role_id)
   )
   ```

2. **API Endpoints Required**:
   ```typescript
   // User Management
   GET    /api/users              // List users with pagination
   GET    /api/users/:id          // Get single user details
   PUT    /api/users/:id          // Update user profile
   DELETE /api/users/:id          // Delete user
   
   // Role Management
   POST   /api/users/:id/roles    // Assign role
   DELETE /api/users/:id/roles/:roleId // Remove role
   
   // Invite Codes
   POST   /api/users/:id/invite   // Generate invite code
   GET    /api/users/:id/invites  // List user's invite codes
   ```

3. **Component Structure**:
   ```
   components/
     admin/
       UserList.vue              // Main user list component
       UserProfileModal.vue      // User profile modal
       UserDeleteModal.vue       // Delete confirmation modal
       UserRoleManager.vue       // Role management component
       InviteCodeGenerator.vue   // Invite code component
   ```

4. **State Management**:
   ```typescript
   interface UserManagementState {
     users: User[]
     selectedUser: User | null
     pagination: {
       page: number
       limit: number
       total: number
     }
     filters: {
       search: string
       role?: number
     }
     isLoading: boolean
     error: string | null
   }
   ```

**User Interface Requirements**:

1. **User List**:
   ```vue
   <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
     <!-- User Card -->
     <div class="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg p-4">
       <!-- User Info -->
       <div class="flex items-center space-x-4">
         <img class="w-12 h-12 rounded-full" :src="user.profile_img" />
         <div>
           <h3 class="font-medium">{{ user.full_name }}</h3>
           <p class="text-sm text-black/70 dark:text-white/70">{{ user.email }}</p>
         </div>
       </div>
       <!-- Roles -->
       <div class="mt-4">
         <div class="flex flex-wrap gap-2">
           <span v-for="role in user.roles" 
                 class="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
             {{ role.role_name }}
           </span>
         </div>
       </div>
       <!-- Actions -->
       <div class="mt-4 flex justify-end">
         <button @click="openUserProfile(user)" 
                 class="text-sm text-blue-600 dark:text-blue-400 hover:underline">
           Manage User
         </button>
       </div>
     </div>
   </div>
   ```

2. **Profile Modal**:
   ```vue
   <div class="fixed inset-0 z-50 overflow-y-auto">
     <div class="flex min-h-full items-end justify-center p-4 sm:items-center">
       <div class="w-full max-w-2xl bg-white dark:bg-black rounded-lg shadow-xl">
         <!-- Header -->
         <div class="px-6 py-4 border-b border-black/10 dark:border-white/10">
           <h2 class="text-xl font-semibold">Edit User Profile</h2>
         </div>
         
         <!-- Content -->
         <div class="px-6 py-4 space-y-6">
           <!-- Profile Form -->
           <form @submit.prevent="saveChanges" class="space-y-4">
             <!-- Form Fields -->
           </form>
         </div>
         
         <!-- Footer -->
         <div class="px-6 py-4 border-t border-black/10 dark:border-white/10 flex justify-between">
           <button @click="closeModal" 
                   class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white">
             Cancel
           </button>
           <div class="space-x-2">
             <button @click="confirmDelete" 
                     class="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
               Delete User
             </button>
             <button type="submit" 
                     class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
               Save Changes
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
   ```

**Security Considerations**:

1. **Role-Based Access Control**:
   - Only users with admin role (role_id === 1) can access these features
   - Middleware protection on all admin routes
   - Server-side validation of admin status

2. **Data Protection**:
   - Validate all input data
   - Sanitize output to prevent XSS
   - Confirm destructive actions
   - Log all admin actions for audit

3. **Error Handling**:
   - Graceful error handling with user-friendly messages
   - Proper error logging
   - Fallback UI states

**Testing Requirements**:

1. **Unit Tests**:
   - Component rendering
   - Form validation
   - State management
   - API integration

2. **Integration Tests**:
   - User flow testing
   - Role management
   - Delete user flow
   - Error scenarios

3. **E2E Tests**:
   - Complete user management workflow
   - Dark/light mode testing
   - Responsive design testing

This user management system should provide administrators with a powerful yet intuitive interface for managing platform users while maintaining security and data integrity.

#### 5.2 Thread Moderation (Future Implementation)
[Content moved to future phase]

#### 5.3 Catalog Management (Future Implementation)
[Content moved to future phase]

#### 5.4 Analytics (Future Implementation)
[Content moved to future phase]

## 5. Non-Functional Requirements

### 5.1 Performance
* Handle up to 500 concurrent users with minimal latency (Supabase + serverless approach)

### 5.2 Scalability
* Potential for incremental growth; code structure should allow expansions in features

### 5.3 Security
* Enforce role-based access (admin, coach, member)
* SSL for all transactions, secure Stripe integration
* Supabase RLS for data protection

### 5.4 Branding & Theming
* Default: black/white styling with optional accent color
* Light/Dark mode toggle

## 6. Risks & Considerations

* **Payment Integration Complexity**: Ensure secure handling of Stripe and compliance with relevant regulations
* **Content Moderation**: Potential need for automated or manual filtering of inappropriate content
* **Push Notifications**: Requires additional service (Firebase, OneSignal, etc.). Evaluate in Phase 3
* **Timeline & Scope**: Must prioritize MVP features to release early

## 7. Next Steps

1. **Technical Architecture Planning**: Diagram how Nuxt 3, Supabase, and Stripe will interact
2. **UI/UX Prototyping**: Create wireframes for landing page, Threads, and Admin Dashboard
3. **MVP Build (Phase 1)**: Landing, Auth, Threads, Basic Admin tools
4. **Phase 2**: Catalog & Stripe
5. **Phase 3**: Advanced analytics, push notifications, expanded admin features

---

*This PRD serves as a high-level blueprint.*