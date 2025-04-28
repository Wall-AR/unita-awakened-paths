
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CommunityUpdatesCard = () => {
  // Mock data - será substituído por dados reais
  const updates = [
    {
      id: "1",
      type: "event",
      title: "Solstício de Verão: Ritual Online",
      date: "21 de Dezembro, 19:00",
      path: "/community/events/1"
    },
    {
      id: "2",
      type: "forum",
      title: "Nova discussão: Símbolos Alquímicos Essenciais",
      author: "maria.alquimista",
      path: "/community/forum/2"
    },
    {
      id: "3",
      type: "circle",
      title: "Grupo de Estudo: Cabala Prática formando agora",
      members: 8,
      path: "/community/circles/3"
    }
  ];

  // Ícones para diferentes tipos de atualizações
  const getIcon = (type: string) => {
    switch (type) {
      case 'event': return '🌟';
      case 'forum': return '💬';
      case 'circle': return '👥';
      default: return '📣';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atualizações da Comunidade</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {updates.map((update) => (
            <Link key={update.id} to={update.path}>
              <div className="p-3 border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-200">
                <div className="flex gap-3">
                  <div className="text-xl">{getIcon(update.type)}</div>
                  <div>
                    <h4 className="text-sm font-medium">{update.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {update.date ? update.date : update.author ? `Por: ${update.author}` : `${update.members} membros`}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          <div className="text-center pt-2">
            <Link 
              to="/community" 
              className="text-sm text-primary hover:underline"
            >
              Explorar comunidade →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityUpdatesCard;
