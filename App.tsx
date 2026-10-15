import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/services/query/queryClient";
import { AuthProvider } from "./app/context/AuthContext";
import AppNavigator from "./app/navigation/AppNavigator";
import { ThemeProvider } from "./app/context/ThemeContext";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
