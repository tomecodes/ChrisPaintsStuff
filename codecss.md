
A responsive web page with a fixed sidebar and main content section. Built for the freeCodeCamp "Technical Documentation Page" project.
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  line-height: 1.6;
  display: flex;
}

/* Sidebar nav */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  overflow-y: auto;
}

#navbar header {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.nav-link {
  display: block;
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 0.25rem 0;
}

.nav-link:hover {
  color: #00ccff;
}

/* Main content */
#main-doc {
  margin-left: 260px; /*pushes main content more to the left*/
  padding: 2rem;
  flex: 1;
}

.main-section {
  margin-bottom: 3rem;
}

code {
  display: block;
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  white-space: pre-wrap;
}

/* Responsive */
@media (max-width: 768px) {
  body {
    flex-direction: column;
  }

  #navbar {
    position: relative;
    width: 100%;
    height: auto;
  }

  #main-doc {
    margin-left: 0;
  }
}

END A responsive web page with a fixed sidebar and main content section. Built for the freeCodeCamp "Technical Documentation Page" project. END
<!-- git stuff
 git status
git add . / git add filename.html
git commit -m "your update message"
git push
Create & switch to a new branch:

git checkout -b branch-name
Switch between branches:

git checkout main        # to go to main
git checkout branch-name # to go to your feature branch
Merge a branch into main:

git checkout main
git pull origin main
git merge branch-name
git push origin main
Delete a merged branch:

git branch -d branch-name             # delete locally
git push origin --delete branch-name # delete from GitHub