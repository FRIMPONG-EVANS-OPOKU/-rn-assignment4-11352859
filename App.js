import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

const featuredJobs = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Facebook",
    location: "Accra, Ghana",
    salary: "$180,00",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Google",
    location: "Mountain View, US",
    salary: "$160,000/y",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  }
];

const popularJobs = [
  {
    id: "1",
    title: "Jr Executive",
    company: "Burger King",
    location: "Los Angeles, US",
    salary: "$96,000/y",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Burger_King_2020.svg"
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Beats",
    location: "Florida, US",
    salary: "$84,000/y",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Beats_Electronics_logo.svg"
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Facebook",
    location: "Florida, US",
    salary: "$86,000/y",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Eric Atsu</Text>
          <Text style={styles.userEmail}>eric@gmail.com</Text>
        </View>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.userImage}
        />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Antu_view-filter.svg"
            }}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) => (
          <View style={styles.featuredJobCard}>
            <Image source={{ uri: item.logo }} style={styles.jobLogo} />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <Text style={styles.jobSalary}>{item.salary}</Text>
            <Text style={styles.jobLocation}>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularJobs}
        renderItem={({ item }) => (
          <View style={styles.popularJobCard}>
            <Image source={{ uri: item.logo }} style={styles.popularJobLogo} />
            <View>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobCompany}>{item.company}</Text>
              <Text style={styles.jobSalary}>{item.salary}</Text>
              <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  userEmail: {
    color: "#888"
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  searchInput: {
    flex: 1,
    padding: 12,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginRight: 8
  },
  filterButton: {
    padding: 12,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6"
  },
  filterIcon: {
    width: 20,
    height: 20
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  seeAll: {
    color: "#0073b1"
  },
  featuredJobCard: {
    backgroundColor: "#E6ECF9",
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
    width: 200
  },
  jobLogo: {
    width: 40,
    height: 40
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8
  },
  jobCompany: {
    color: "#888"
  },
  jobSalary: {
    marginTop: 8,
    fontWeight: "bold"
  },
  jobLocation: {
    color: "#888"
  },
  popularJobCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1
  },
  popularJobLogo: {
    width: 40,
    height: 40,
    marginRight: 16
  }
});
